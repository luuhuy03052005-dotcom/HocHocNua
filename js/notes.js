(function () {
  'use strict';

  const STORAGE_KEY = 'hoctap123_global_notes_v1';
  const MIN_W = 270;
  const MIN_H = 230;
  const DEFAULT_W = 340;
  const DEFAULT_H = 380;

  let state = {
    isOpen: false,
    activeId: '',
    bubblePos: null,
    panelRect: null,
    notes: []
  };

  let saveTimer = null;
  let confirmDeleteTimer = null;
  let pendingDeleteId = null;

  function uid() {
    return 'n_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
  }

  function createBlankNote(indexNum) {
    return {
      id: uid(),
      title: indexNum ? 'Ghi chú ' + indexNum : '',
      html: '',
      updatedAt: Date.now()
    };
  }

  function loadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          state.isOpen = Boolean(parsed.isOpen);
          state.activeId = String(parsed.activeId || '');
          state.bubblePos = parsed.bubblePos && typeof parsed.bubblePos.x === 'number' ? parsed.bubblePos : null;
          state.panelRect = parsed.panelRect && typeof parsed.panelRect.w === 'number' ? parsed.panelRect : null;
          state.notes = Array.isArray(parsed.notes)
            ? parsed.notes.filter((n) => n && typeof n === 'object' && n.id).map((n) => ({
                id: String(n.id),
                title: String(n.title || ''),
                html: String(n.html || ''),
                updatedAt: Number(n.updatedAt) || Date.now()
              }))
            : [];
        }
      }
    } catch (_) {}

    if (state.notes.length === 0) {
      const first = createBlankNote(1);
      state.notes = [first];
      state.activeId = first.id;
    } else if (!state.notes.some((n) => n.id === state.activeId)) {
      state.activeId = state.notes[0].id;
    }
  }

  function saveStateNow() {
    if (saveTimer) {
      window.clearTimeout(saveTimer);
      saveTimer = null;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function scheduleSave() {
    if (saveTimer) window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(saveStateNow, 180);
  }

  function getActiveNote() {
    return state.notes.find((n) => n.id === state.activeId) || state.notes[0];
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function plainTextToFormattedHtml(text) {
    const lines = String(text || '').replace(/\r\n/g, '\n').split('\n');
    let html = '';
    let inUl = false;
    let inOl = false;

    const closeLists = () => {
      if (inUl) { html += '</ul>'; inUl = false; }
      if (inOl) { html += '</ol>'; inOl = false; }
    };

    lines.forEach((rawLine) => {
      const bulletMatch = rawLine.match(/^\s*[-*+•–]\s+(.*)$/);
      const numMatch = rawLine.match(/^\s*\d+[.)]\s+(.*)$/);
      if (bulletMatch) {
        if (inOl) { html += '</ol>'; inOl = false; }
        if (!inUl) { html += '<ul>'; inUl = true; }
        html += '<li>' + escapeHtml(bulletMatch[1]) + '</li>';
      } else if (numMatch) {
        if (inUl) { html += '</ul>'; inUl = false; }
        if (!inOl) { html += '<ol>'; inOl = true; }
        html += '<li>' + escapeHtml(numMatch[1]) + '</li>';
      } else {
        closeLists();
        html += rawLine.trim() ? '<div>' + escapeHtml(rawLine) + '</div>' : '<div><br></div>';
      }
    });
    closeLists();
    return html;
  }

  function clamp(val, min, max) {
    return Math.min(Math.max(val, min), Math.max(min, max));
  }

  function initFloatingNotes() {
    const bubble = document.getElementById('fn-bubble');
    const bubbleCount = document.getElementById('fn-bubble-count');
    const panel = document.getElementById('fn-panel');
    const dragHandle = document.getElementById('fn-drag-handle');
    const strip = document.getElementById('fn-notes-strip');
    const addBtn = document.getElementById('fn-add-btn');
    const minBtn = document.getElementById('fn-minimize-btn');
    const delBtn = document.getElementById('fn-delete-btn');
    const titleInput = document.getElementById('fn-title-input');
    const editor = document.getElementById('fn-editor');
    const toolbar = document.getElementById('fn-toolbar');
    if (!bubble || !panel || !editor || !titleInput || !strip) return;

    loadState();

    function applyBubblePosition() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const bw = bubble.offsetWidth || 48;
      const bh = bubble.offsetHeight || 48;
      if (state.bubblePos) {
        const x = clamp(state.bubblePos.x, 8, vw - bw - 8);
        const y = clamp(state.bubblePos.y, 8, vh - bh - 8);
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';
        bubble.style.right = 'auto';
        bubble.style.bottom = 'auto';
      } else {
        bubble.style.right = '18px';
        bubble.style.bottom = '22px';
        bubble.style.left = 'auto';
        bubble.style.top = 'auto';
      }
    }

    function applyPanelRect() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const w = clamp(state.panelRect?.w || DEFAULT_W, MIN_W, vw - 16);
      const h = clamp(state.panelRect?.h || DEFAULT_H, MIN_H, vh - 16);
      let x = state.panelRect?.x;
      let y = state.panelRect?.y;
      if (typeof x !== 'number' || typeof y !== 'number') {
        const bRect = bubble.getBoundingClientRect();
        x = (bRect.width > 0 ? bRect.right - w : vw - w - 18);
        y = (bRect.height > 0 ? bRect.top - h - 10 : vh - h - 76);
      }
      x = clamp(x, 8, vw - w - 8);
      y = clamp(y, 8, vh - h - 8);
      panel.style.width = w + 'px';
      panel.style.height = h + 'px';
      panel.style.left = x + 'px';
      panel.style.top = y + 'px';
      state.panelRect = { x, y, w, h };
    }

    function resetDeleteConfirm() {
      pendingDeleteId = null;
      if (confirmDeleteTimer) {
        window.clearTimeout(confirmDeleteTimer);
        confirmDeleteTimer = null;
      }
      if (delBtn) {
        delBtn.textContent = 'Xóa';
        delBtn.classList.remove('is-confirming');
      }
    }

    function updateBubbleBadge() {
      const nonEmptyCount = state.notes.filter((n) => n.title.trim() || n.html.replace(/<[^>]*>/g, '').trim()).length;
      if (bubbleCount) {
        bubbleCount.textContent = String(nonEmptyCount || state.notes.length);
        bubbleCount.hidden = nonEmptyCount === 0;
      }
    }

    function getNoteDisplayName(note, idx) {
      const t = (note.title || '').trim();
      if (t) return t;
      const textPreview = note.html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      if (textPreview) return textPreview.slice(0, 18) + (textPreview.length > 18 ? '…' : '');
      return 'Ghi chú ' + (idx + 1);
    }

    function renderStrip() {
      strip.replaceChildren();
      state.notes.forEach((note, idx) => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'fn-note-tab' + (note.id === state.activeId ? ' is-active' : '');
        tab.textContent = getNoteDisplayName(note, idx);
        tab.title = tab.textContent;
        tab.addEventListener('click', () => {
          if (note.id === state.activeId) return;
          syncCurrentNoteFromDom();
          state.activeId = note.id;
          resetDeleteConfirm();
          renderActiveNote();
          renderStrip();
          saveStateNow();
        });
        strip.appendChild(tab);
      });
    }

    function renderActiveNote() {
      const note = getActiveNote();
      if (!note) return;
      titleInput.value = note.title || '';
      if (editor.innerHTML !== note.html) {
        editor.innerHTML = note.html || '';
      }
      updateToolbarStates();
    }

    function syncCurrentNoteFromDom() {
      const note = getActiveNote();
      if (!note) return;
      note.title = titleInput.value;
      note.html = editor.innerHTML;
      note.updatedAt = Date.now();
      updateBubbleBadge();
    }

    function setOpen(nextOpen) {
      state.isOpen = Boolean(nextOpen);
      resetDeleteConfirm();
      if (state.isOpen) {
        panel.hidden = false;
        bubble.classList.add('is-open');
        applyPanelRect();
        renderStrip();
        renderActiveNote();
      } else {
        syncCurrentNoteFromDom();
        panel.hidden = true;
        bubble.classList.remove('is-open');
        applyBubblePosition();
      }
      updateBubbleBadge();
      saveStateNow();
    }

    // --- Bubble Drag + Click ---
    let bDrag = null;
    bubble.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      const rect = bubble.getBoundingClientRect();
      bDrag = {
        id: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        origX: rect.left,
        origY: rect.top,
        moved: false
      };
      bubble.setPointerCapture(e.pointerId);
    });
    bubble.addEventListener('pointermove', (e) => {
      if (!bDrag || e.pointerId !== bDrag.id) return;
      const dx = e.clientX - bDrag.startX;
      const dy = e.clientY - bDrag.startY;
      if (!bDrag.moved && Math.hypot(dx, dy) > 5) {
        bDrag.moved = true;
        bubble.classList.add('is-dragging');
      }
      if (bDrag.moved) {
        const bw = bubble.offsetWidth || 48;
        const bh = bubble.offsetHeight || 48;
        const nx = clamp(bDrag.origX + dx, 8, window.innerWidth - bw - 8);
        const ny = clamp(bDrag.origY + dy, 8, window.innerHeight - bh - 8);
        bubble.style.left = nx + 'px';
        bubble.style.top = ny + 'px';
        bubble.style.right = 'auto';
        bubble.style.bottom = 'auto';
        state.bubblePos = { x: nx, y: ny };
      }
    });
    const endBubblePointer = (e) => {
      if (!bDrag || e.pointerId !== bDrag.id) return;
      const wasMoved = bDrag.moved;
      bDrag = null;
      bubble.classList.remove('is-dragging');
      if (wasMoved) {
        saveStateNow();
      } else {
        setOpen(!state.isOpen);
      }
    };
    bubble.addEventListener('pointerup', endBubblePointer);
    bubble.addEventListener('pointercancel', endBubblePointer);

    // --- Panel Header Drag ---
    let pDrag = null;
    dragHandle?.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, input')) return;
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      const rect = panel.getBoundingClientRect();
      pDrag = {
        id: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        origX: rect.left,
        origY: rect.top,
        w: rect.width,
        h: rect.height
      };
      dragHandle.setPointerCapture(e.pointerId);
      panel.classList.add('is-dragging');
    });
    dragHandle?.addEventListener('pointermove', (e) => {
      if (!pDrag || e.pointerId !== pDrag.id) return;
      const nx = clamp(pDrag.origX + (e.clientX - pDrag.startX), 8, window.innerWidth - pDrag.w - 8);
      const ny = clamp(pDrag.origY + (e.clientY - pDrag.startY), 8, window.innerHeight - pDrag.h - 8);
      panel.style.left = nx + 'px';
      panel.style.top = ny + 'px';
      state.panelRect = { x: nx, y: ny, w: pDrag.w, h: pDrag.h };
    });
    const endPanelDrag = (e) => {
      if (!pDrag || e.pointerId !== pDrag.id) return;
      pDrag = null;
      panel.classList.remove('is-dragging');
      saveStateNow();
    };
    dragHandle?.addEventListener('pointerup', endPanelDrag);
    dragHandle?.addEventListener('pointercancel', endPanelDrag);

    // --- 8-Direction Free Resize ---
    let rState = null;
    panel.querySelectorAll('[data-fn-resize]').forEach((handle) => {
      handle.addEventListener('pointerdown', (e) => {
        if (e.button !== 0 && e.pointerType === 'mouse') return;
        e.stopPropagation();
        e.preventDefault();
        const rect = panel.getBoundingClientRect();
        rState = {
          id: e.pointerId,
          dir: handle.getAttribute('data-fn-resize') || 'se',
          startX: e.clientX,
          startY: e.clientY,
          origX: rect.left,
          origY: rect.top,
          origW: rect.width,
          origH: rect.height
        };
        handle.setPointerCapture(e.pointerId);
        panel.classList.add('is-resizing');
      });
      handle.addEventListener('pointermove', (e) => {
        if (!rState || e.pointerId !== rState.id) return;
        const dx = e.clientX - rState.startX;
        const dy = e.clientY - rState.startY;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        let { origX: x, origY: y, origW: w, origH: h, dir } = rState;

        if (dir.includes('e')) {
          w = clamp(rState.origW + dx, MIN_W, vw - x - 8);
        }
        if (dir.includes('s')) {
          h = clamp(rState.origH + dy, MIN_H, vh - y - 8);
        }
        if (dir.includes('w')) {
          const maxLeft = rState.origX + rState.origW - MIN_W;
          x = clamp(rState.origX + dx, 8, maxLeft);
          w = rState.origW + (rState.origX - x);
        }
        if (dir.includes('n')) {
          const maxTop = rState.origY + rState.origH - MIN_H;
          y = clamp(rState.origY + dy, 8, maxTop);
          h = rState.origH + (rState.origY - y);
        }

        panel.style.left = x + 'px';
        panel.style.top = y + 'px';
        panel.style.width = w + 'px';
        panel.style.height = h + 'px';
        state.panelRect = { x, y, w, h };
      });
      const endResize = (e) => {
        if (!rState || e.pointerId !== rState.id) return;
        rState = null;
        panel.classList.remove('is-resizing');
        saveStateNow();
      };
      handle.addEventListener('pointerup', endResize);
      handle.addEventListener('pointercancel', endResize);
    });

    // --- CRUD Actions ---
    addBtn?.addEventListener('click', () => {
      syncCurrentNoteFromDom();
      const next = createBlankNote(state.notes.length + 1);
      next.title = '';
      state.notes.unshift(next);
      state.activeId = next.id;
      resetDeleteConfirm();
      renderStrip();
      renderActiveNote();
      saveStateNow();
      editor.focus();
    });

    minBtn?.addEventListener('click', () => setOpen(false));

    delBtn?.addEventListener('click', () => {
      const current = getActiveNote();
      if (!current) return;
      if (pendingDeleteId !== current.id) {
        pendingDeleteId = current.id;
        delBtn.textContent = 'Chắc xóa?';
        delBtn.classList.add('is-confirming');
        if (confirmDeleteTimer) window.clearTimeout(confirmDeleteTimer);
        confirmDeleteTimer = window.setTimeout(resetDeleteConfirm, 3000);
        return;
      }
      resetDeleteConfirm();
      state.notes = state.notes.filter((n) => n.id !== current.id);
      if (state.notes.length === 0) {
        const fresh = createBlankNote(1);
        fresh.title = '';
        state.notes = [fresh];
      }
      state.activeId = state.notes[0].id;
      renderStrip();
      renderActiveNote();
      updateBubbleBadge();
      saveStateNow();
    });

    titleInput.addEventListener('input', () => {
      const note = getActiveNote();
      if (!note) return;
      note.title = titleInput.value;
      note.updatedAt = Date.now();
      const activeTab = strip.querySelector('.fn-note-tab.is-active');
      const idx = state.notes.findIndex((n) => n.id === note.id);
      if (activeTab) activeTab.textContent = getNoteDisplayName(note, Math.max(0, idx));
      updateBubbleBadge();
      scheduleSave();
    });

    // --- Rich Formatting & Auto-Bullet Detection ---
    function updateToolbarStates() {
      if (document.activeElement !== editor && !editor.contains(document.activeElement)) return;
      toolbar?.querySelectorAll('[data-fn-cmd]').forEach((btn) => {
        const cmd = btn.getAttribute('data-fn-cmd');
        if (cmd === 'bold' || cmd === 'underline' || cmd === 'insertUnorderedList') {
          let active = false;
          try { active = document.queryCommandState(cmd); } catch (_) {}
          btn.classList.toggle('is-active', active);
        }
      });
    }

    function clearHighlightInSelection() {
      editor.focus();
      try {
        document.execCommand('hiliteColor', false, 'transparent');
      } catch (_) {}
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
        const range = sel.getRangeAt(0);
        editor.querySelectorAll('span[style*="background"], font[style*="background"], mark').forEach((node) => {
          if (range.intersectsNode(node)) {
            node.style.backgroundColor = '';
            if (!node.getAttribute('style')?.trim()) node.removeAttribute('style');
          }
        });
      }
    }

    function cleanBulletMarkersAndToggleList() {
      editor.focus();
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        editor.querySelectorAll('div, p').forEach((block) => {
          if (sel.containsNode(block, true)) {
            block.innerHTML = block.innerHTML.replace(/^\s*[-*+•–](?:\s|&nbsp;)+/, '');
          }
        });
      }
      document.execCommand('insertUnorderedList', false, null);
    }

    toolbar?.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) e.preventDefault();
    });

    toolbar?.addEventListener('click', (e) => {
      const cmdBtn = e.target.closest('[data-fn-cmd]');
      if (cmdBtn) {
        const cmd = cmdBtn.getAttribute('data-fn-cmd');
        editor.focus();
        if (cmd === 'insertUnorderedList') {
          cleanBulletMarkersAndToggleList();
        } else {
          document.execCommand(cmd, false, null);
        }
        syncCurrentNoteFromDom();
        updateToolbarStates();
        scheduleSave();
        return;
      }

      const hlBtn = e.target.closest('[data-fn-hl]');
      if (hlBtn) {
        const color = hlBtn.getAttribute('data-fn-hl');
        editor.focus();
        if (color === 'none') {
          clearHighlightInSelection();
        } else {
          try {
            if (!document.execCommand('hiliteColor', false, color)) {
              document.execCommand('backColor', false, color);
            }
          } catch (_) {
            document.execCommand('backColor', false, color);
          }
        }
        syncCurrentNoteFromDom();
        scheduleSave();
      }
    });

    function tryAutoFormatBulletOnInput() {
      const sel = window.getSelection();
      if (!sel || !sel.isCollapsed || sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);
      const node = range.startContainer;
      if (!node || node.nodeType !== Node.TEXT_NODE) return;
      if (node.parentElement?.closest('li')) return;

      // Ensure this text node is at the beginning of its line/block
      let prev = node.previousSibling;
      while (prev) {
        if (prev.nodeName === 'BR') break;
        if ((prev.textContent || '').trim().length > 0) return;
        prev = prev.previousSibling;
      }

      const beforeCaret = (node.textContent || '').slice(0, range.startOffset);
      const ulMatch = beforeCaret.match(/^\s*[-*+•–][\s\u00A0]$/);
      const olMatch = beforeCaret.match(/^\s*1[.)][\s\u00A0]$/);
      if (!ulMatch && !olMatch) return;

      const prefixLen = beforeCaret.length;
      node.textContent = (node.textContent || '').slice(prefixLen);
      const newRange = document.createRange();
      newRange.setStart(node, 0);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);

      document.execCommand(ulMatch ? 'insertUnorderedList' : 'insertOrderedList', false, null);
    }

    editor.addEventListener('input', () => {
      tryAutoFormatBulletOnInput();
      syncCurrentNoteFromDom();
      const note = getActiveNote();
      if (note && !note.title.trim()) {
        const activeTab = strip.querySelector('.fn-note-tab.is-active');
        const idx = state.notes.findIndex((n) => n.id === note.id);
        if (activeTab) activeTab.textContent = getNoteDisplayName(note, Math.max(0, idx));
      }
      updateToolbarStates();
      scheduleSave();
    });

    editor.addEventListener('paste', (e) => {
      const plain = e.clipboardData?.getData('text/plain') || '';
      if (!plain) return;
      // Auto-format plain text paste cleanly (especially bullet lines - / * / • / 1.)
      e.preventDefault();
      const formatted = plainTextToFormattedHtml(plain);
      document.execCommand('insertHTML', false, formatted);
      syncCurrentNoteFromDom();
      scheduleSave();
    });

    editor.addEventListener('keyup', updateToolbarStates);
    editor.addEventListener('mouseup', updateToolbarStates);

    // Prevent global quiz shortcuts from firing while typing inside Notes
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setOpen(false);
        return;
      }
      e.stopPropagation();
    });

    window.addEventListener('resize', () => {
      applyBubblePosition();
      if (state.isOpen) applyPanelRect();
    });

    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) {
        loadState();
        updateBubbleBadge();
        if (state.isOpen) {
          renderStrip();
          renderActiveNote();
        }
      }
    });

    applyBubblePosition();
    updateBubbleBadge();
    if (state.isOpen) {
      setOpen(true);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingNotes);
  } else {
    initFloatingNotes();
  }
})();

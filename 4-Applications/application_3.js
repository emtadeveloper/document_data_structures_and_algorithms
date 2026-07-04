/*
=======================================================================================================================================================
=======================================================================================================================================================

دو پشته داریم undo/redo است. برای  LIFO ساختاری Stack مفهوم اصلی: پشته

undoStack: تاریخچه حالات قبلی

redoStack:  شده‌اند undo حالاتی که 

را خالی می‌کنیم (چون مسیر جدیدی شروع شده است) redo ذخیره می‌کنیم و پشته undo وقتی کاربر عمل جدیدی انجام می‌دهد، وضعیت فعلی را در پشته 

undo وضعیت فعلی دوباره به  redo بیرون کشیده می‌شود (بازگشت)؛ با undo منتقل شده و آخرین حالت از redo وضعیت فعلی به پشته undo با فشردن 

بازمی‌گردد (پیشروی) redo رفته و آخرین حالت از 
  
=======================================================================================================================================================

import { useState, useRef } from 'react';

function useUndoRedo(initialState) {
  const undoStack = useRef([initialState]);
  const redoStack = useRef([]);
  const [state, setState] = useState(initialState);

  const doAction = (newState) => {
    undoStack.current.push(newState);
    redoStack.current = [];   // مسیر جدید
    setState(newState);
  };

  const undo = () => {
    if (undoStack.current.length <= 1) return;
    redoStack.current.push(state);
    const prev = undoStack.current.pop();
    setState(prev);
  };

  const redo = () => {
    if (redoStack.current.length === 0) return;
    undoStack.current.push(state);
    const next = redoStack.current.pop();
    setState(next);
  };

  return [state, doAction, undo, redo];
}

// استفاده در کامپوننت
function TextEditor() {
  const [text, setText, undo, redo] = useUndoRedo("");

  return (
    <div>
      <textarea 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
      <button onClick={() => setText("")}>Clear (action)</button>
    </div>
  );
}

=======================================================================================================================================================
=======================================================================================================================================================

*/

class UndoRedo {
  constructor(initial) {
    this.undoStack = [initial];
    this.redoStack = [];
  }

  get current() { return this.undoStack.at(-1); }

  do(newState) {
    this.undoStack.push(newState);
    this.redoStack = [];
  }

  undo() {
    if (this.undoStack.length <= 1) return;
    this.redoStack.push(this.undoStack.pop());
  }

  redo() {
    if (this.redoStack.length === 0) return;
    this.undoStack.push(this.redoStack.pop());
  }
}

const history = new UndoRedo("");

history.do("A");
history.do("AB");
history.do("ABC");

console.log(history.current); // "ABC"
history.undo();
console.log(history.current); // "AB"
history.redo();
console.log(history.current); // "ABC"

// =======================================================================================================================================================
// =======================================================================================================================================================

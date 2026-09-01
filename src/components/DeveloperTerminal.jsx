import React, { useState, useRef, useEffect } from 'react';
import { siteContent } from '../data/content';
import { Terminal as TerminalIcon, Play, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
import { renderTextWithEmoji } from '../utils/emoji';

const DeveloperTerminal = () => {
  const [history, setHistory] = useState(siteContent.terminal.initialLines);
  const [inputValue, setInputValue] = useState('');
  const [finalExecuted, setFinalExecuted] = useState(false);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim().toLowerCase();
    if (!raw) return;

    const newHistory = [...history, { type: 'input', text: `> ${cmdText}` }];

    switch (raw) {
      case 'whoami':
        newHistory.push({ type: 'output', text: 'Harsh (Full-Stack Engineer & Distracted Human)' });
        break;
      case 'system.check()':
      case 'system.check':
        newHistory.push({ type: 'output', text: 'Status: OK | Feelings detected ❤️ | Heart Rate: 84 bpm' });
        break;
      case 'status':
        newHistory.push({ type: 'output', text: 'Heart       : occupied\nBrain       : distracted\nSleep       : questionable' });
        break;
      case 'cause':
        newHistory.push({ type: 'output', text: 'You.' });
        break;
      case 'uninstall feelings':
        newHistory.push({ type: 'error', text: 'ERROR 404: Operation denied. Feelings cannot be removed or overwritten.' });
        break;
      case 'secret':
        newHistory.push({ type: 'output', text: 'Okay, you’re curious. I like that about you. 👀' });
        break;
      case 'help':
        newHistory.push({
          type: 'output',
          text: siteContent.terminal.availableCommands.map(c => `${c.cmd.padEnd(20)} - ${c.desc}`).join('\n')
        });
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      case 'final_message()':
      case 'final_message':
        setFinalExecuted(true);
        newHistory.push({ type: 'output', text: siteContent.terminal.finalCommandOutput });
        break;
      default:
        newHistory.push({ type: 'error', text: `command not found: ${cmdText}. Type 'help' for available commands.` });
        break;
    }

    setHistory(newHistory);
    setInputValue('');
  };

  const handleRunFinalCommand = () => {
    handleCommand('final_message()');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

  return (
    <section
      id="terminal-section"
      style={{
        position: 'relative',
        minHeight: '85vh',
        padding: '80px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '650px', marginBottom: '36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '16px' }}>
          <TerminalIcon size={14} color="#c4b5fd" />
          <span style={{ fontSize: '0.85rem', color: '#c4b5fd', letterSpacing: '0.05em' }}>
            Developer Easter Egg
          </span>
        </div>
        <h2 className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, marginBottom: '8px' }}>
          System Sentiment Diagnostic
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          An authentic terminal interface running real emotional diagnostics.
        </p>
      </div>

      {/* Terminal Container */}
      <div
        className="terminal-window"
        style={{
          maxWidth: '750px',
          width: '100%',
          overflow: 'hidden'
        }}
      >
        {/* Header Bar */}
        <div className="terminal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="terminal-dot" style={{ background: '#ef4444' }}></span>
            <span className="terminal-dot" style={{ background: '#f59e0b' }}></span>
            <span className="terminal-dot" style={{ background: '#10b981' }}></span>
            <span style={{ marginLeft: '8px', fontSize: '0.8rem', color: '#94a3b8' }}>
              bash — {siteContent.terminal.user}
            </span>
          </div>
          <button
            onClick={() => setHistory(siteContent.terminal.initialLines)}
            title="Reset Terminal"
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <RefreshCw size={14} />
          </button>
        </div>

        {/* Console Content */}
        <div
          ref={terminalBodyRef}
          style={{
            padding: '20px 24px',
            minHeight: '280px',
            maxHeight: '380px',
            overflowY: 'auto',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: '#f8fafc',
            whiteSpace: 'pre-wrap'
          }}
        >
          {history.map((line, idx) => (
            <div key={idx} style={{ marginBottom: '8px' }}>
              {line.type === 'system' && <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>{renderTextWithEmoji(line.text)}</span>}
              {line.type === 'input' && <span style={{ color: '#c4b5fd', fontWeight: 600 }}>{renderTextWithEmoji(line.text)}</span>}
              {line.type === 'output' && <span style={{ color: '#38bdf8' }}>{renderTextWithEmoji(line.text)}</span>}
              {line.type === 'error' && <span style={{ color: '#f472b6', fontWeight: 500 }}>{renderTextWithEmoji(line.text)}</span>}
            </div>
          ))}

          {/* Active Input Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
            <span style={{ color: '#c4b5fd', fontWeight: 600 }}>&gt;</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#f8fafc',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Quick Command Toolbar */}
        <div style={{ padding: '12px 20px', background: '#070a1a', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {siteContent.terminal.availableCommands.slice(0, 4).map((c) => (
              <button
                key={c.cmd}
                onClick={() => handleCommand(c.cmd)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  color: '#cbd5e1',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                {c.cmd}
              </button>
            ))}
          </div>

          <button
            onClick={handleRunFinalCommand}
            className="btn-universe"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Play size={14} style={{ marginRight: '6px' }} />
            <span>Run final command</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTerminal;

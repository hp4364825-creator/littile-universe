import React, { useState } from 'react';
import { siteContent } from '../data/content';
import { HelpCircle, CheckCircle2, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { renderTextWithEmoji } from '../utils/emoji';

const MiniGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const questions = siteContent.quiz.questions;

  const handleSelectOption = (questionId, optionIndex) => {
    const updated = { ...userAnswers, [questionId]: optionIndex };
    setUserAnswers(updated);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {}
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setIsFinished(false);
  };

  return (
    <section
      id="mini-game-section"
      style={{
        position: 'relative',
        minHeight: '75vh',
        padding: '90px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '650px', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.04)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '16px' }}>
          <HelpCircle size={14} color="#38bdf8" />
          <span style={{ fontSize: '0.85rem', color: '#38bdf8', letterSpacing: '0.05em' }}>
            Lighthearted Quiz
          </span>
        </div>
        <h2 className="font-serif-heading text-gradient-lavender" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 400, marginBottom: '8px' }}>
          {renderTextWithEmoji(siteContent.quiz.title)}
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 300 }}>
          {siteContent.quiz.subtitle}
        </p>
      </div>

      <div
        className="glass-panel"
        style={{
          maxWidth: '620px',
          width: '100%',
          padding: '36px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}
      >
        {!isFinished ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
              <span>QUESTION {currentQuestion + 1} OF {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>

            <h3 className="font-serif-heading" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f8fafc', marginBottom: '24px', lineHeight: 1.3 }}>
              {questions[currentQuestion].question}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {questions[currentQuestion].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(questions[currentQuestion].id, idx)}
                  className="glass-card-interactive"
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '16px 20px',
                    color: '#f8fafc',
                    fontSize: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{opt.text}</span>
                  <span style={{ color: '#c4b5fd', fontSize: '1.2rem' }}>→</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4b5fd', margin: '0 auto 20px' }}>
              <Award size={32} />
            </div>

            <h3 className="font-serif-heading text-gradient-lavender" style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '12px' }}>
              Quiz Completed! ✨
            </h3>

            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, fontWeight: 300, marginBottom: '28px' }}>
              {siteContent.quiz.results.highScore}
            </p>

            <button
              onClick={handleReset}
              className="btn-universe-secondary"
              style={{ padding: '10px 24px', fontSize: '0.9rem' }}
            >
              <RotateCcw size={14} style={{ marginRight: '8px' }} />
              Play Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MiniGame;

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, X, Heart } from 'lucide-react';

const starThoughts = [
  "You are my favorite thought today. ✨",
  "Your smile completely changes the mood of a conversation. 😊",
  "I'd choose you in every universe. 🌌",
  "Somehow, talking to you makes ordinary days feel special. 💖",
  "Wish granted: You deserve all the happiness in the world. 💫",
  "In a room full of art, I'd still look at you. 🎨",
  "Every star in this universe shines a little brighter because of you. ⭐",
  "Sometimes I catch myself smiling just thinking about your messages. 📱",
  "You are proof that rare & genuine people still exist. 🌸",
  "A quiet reminder: You are deeply appreciated. ❤️"
];

const BackgroundUniverse = ({ enabled = false }) => {
  const canvasRef = useRef(null);
  const [activeThought, setActiveThought] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Resize Canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse Tracking
    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      targetX: canvas.width / 2,
      targetY: canvas.height / 2,
      radius: 160
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Stars Initialization
    const starCount = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 6000));
    const starColors = ['#ffffff', '#c4b5fd', '#f472b6', '#38bdf8', '#fef08a'];

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.4,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (prefersReducedMotion ? 0.2 : 1),
      vx: (Math.random() - 0.5) * 0.15 * (prefersReducedMotion ? 0 : 1),
      vy: (Math.random() - 0.5) * 0.15 * (prefersReducedMotion ? 0 : 1)
    }));

    // Shooting Stars array
    const shootingStars = [];

    // Click Burst Particle System
    const clickBursts = [];

    const triggerClickEffect = (clickX, clickY) => {
      // 1. Create a targeted shooting star towards click position
      shootingStars.push({
        x: clickX - 250,
        y: clickY - 200,
        length: 120,
        speed: 12,
        angle: Math.PI / 4,
        alpha: 1,
        life: 0,
        maxLife: 35
      });

      // 2. Stardust burst particles at click location
      for (let i = 0; i < 24; i++) {
        const angle = (Math.PI * 2 * i) / 24;
        const speed = Math.random() * 3 + 1;
        clickBursts.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          radius: Math.random() * 2.5 + 1,
          alpha: 1,
          life: 0,
          maxLife: 40
        });
      }

      // 3. Show romantic thought modal/toast
      const randomThought = starThoughts[Math.floor(Math.random() * starThoughts.length)];
      setActiveThought({
        text: randomThought,
        x: clickX,
        y: clickY
      });
    };

    const handleCanvasClick = (e) => {
      if (!enabled) return;
      const targetTag = e.target.tagName ? e.target.tagName.toLowerCase() : '';
      if (['button', 'a', 'input', 'textarea', 'header', 'nav'].includes(targetTag) || e.target.closest('.glass-panel') || e.target.closest('button')) {
        return;
      }
      triggerClickEffect(e.clientX, e.clientY);
    };

    window.addEventListener('click', handleCanvasClick);

    // Render Loop
    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.fillStyle = '#04060d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Deep space nebula ambient mesh
      const grad1 = ctx.createRadialGradient(
        canvas.width * 0.2 + (mouse.x - canvas.width / 2) * 0.02,
        canvas.height * 0.3 + (mouse.y - canvas.height / 2) * 0.02,
        50,
        canvas.width * 0.2,
        canvas.height * 0.3,
        canvas.width * 0.4
      );
      grad1.addColorStop(0, 'rgba(168, 85, 247, 0.09)');
      grad1.addColorStop(1, 'rgba(4, 6, 13, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad2 = ctx.createRadialGradient(
        canvas.width * 0.8 + (mouse.x - canvas.width / 2) * 0.03,
        canvas.height * 0.7 + (mouse.y - canvas.height / 2) * 0.03,
        80,
        canvas.width * 0.8,
        canvas.height * 0.7,
        canvas.width * 0.45
      );
      grad2.addColorStop(0, 'rgba(244, 114, 182, 0.07)');
      grad2.addColorStop(1, 'rgba(4, 6, 13, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render Stars
      stars.forEach(star => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let offsetX = 0;
        let offsetY = 0;

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 14;
          offsetX = -(dx / dist) * force;
          offsetY = -(dy / dist) * force;
        }

        const drawX = star.x + offsetX;
        const drawY = star.y + offsetY;

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillStyle = star.color;
        ctx.shadowBlur = star.radius > 1.2 ? 10 : 0;
        ctx.shadowColor = star.color;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw Constellation Lines near mouse
      ctx.save();
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const s1 = stars[i];
          const s2 = stars[j];
          const distToMouse1 = Math.hypot(mouse.x - s1.x, mouse.y - s1.y);
          const distToMouse2 = Math.hypot(mouse.x - s2.x, mouse.y - s2.y);

          if (distToMouse1 < mouse.radius && distToMouse2 < mouse.radius) {
            const distBetween = Math.hypot(s1.x - s2.x, s1.y - s2.y);
            if (distBetween < 120) {
              const alpha = (1 - distBetween / 120) * 0.3;
              ctx.strokeStyle = `rgba(196, 181, 253, ${alpha})`;
              ctx.lineWidth = 0.7;
              ctx.beginPath();
              ctx.moveTo(s1.x, s1.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.stroke();
            }
          }
        }
      }
      ctx.restore();

      // Render Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha = 1 - ss.life / ss.maxLife;

        ctx.save();
        ctx.globalAlpha = Math.max(0, ss.alpha);
        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.4, 'rgba(244, 114, 182, 0.7)');
        grad.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        ctx.restore();

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      // Render Click Bursts (Stardust Particles)
      for (let i = clickBursts.length - 1; i >= 0; i--) {
        const p = clickBursts[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.alpha = 1 - p.life / p.maxLife;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life >= p.maxLife) {
          clickBursts.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'auto',
          cursor: 'crosshair'
        }}
      />

      {/* Floating Stardust Thought Modal on Clicking Sky Stars */}
      {activeThought && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            maxWidth: '420px',
            width: '90%',
            animation: 'starPopIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <style>{`
            @keyframes starPopIn {
              from { opacity: 0; transform: translate(-50%, -45%) scale(0.85); }
              to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
          `}</style>
          <div
            className="glass-panel"
            style={{
              padding: '28px 24px',
              textAlign: 'center',
              background: 'rgba(9, 13, 31, 0.95)',
              border: '1px solid rgba(244, 114, 182, 0.4)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(244, 114, 182, 0.25)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActiveThought(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#f8fafc',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f472b6', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px' }}>
              <Sparkles size={14} />
              <span>STARDUST WISH</span>
            </div>

            <p className="font-serif-heading" style={{ fontSize: '1.4rem', color: '#f8fafc', fontWeight: 400, lineHeight: 1.5, marginBottom: '18px' }}>
              "{activeThought.text}"
            </p>

            <button
              onClick={() => setActiveThought(null)}
              className="btn-universe"
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              <Heart size={14} style={{ marginRight: '6px' }} />
              Keep Shining ✨
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundUniverse;

import React from 'react';

// Regex matching unicode emojis
const EMOJI_REGEX = /(\p{Extended_Pictographic}|\p{Emoji_Presentation})/gu;

export const renderTextWithEmoji = (text) => {
  if (typeof text !== 'string') return text;

  const parts = text.split(EMOJI_REGEX);
  return parts.map((part, index) => {
    if (EMOJI_REGEX.test(part)) {
      return (
        <span key={index} className="emoji-span">
          {part}
        </span>
      );
    }
    return part;
  });
};

export const EmojiSpan = ({ children }) => (
  <span className="emoji-span">{children}</span>
);

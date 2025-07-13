export function detectSnapBehavior(frames) {
  for (let i = 1; i < frames.length; i++) {
    const movement = Math.abs(frames[i].crosshairX - frames[i - 1].crosshairX);
    if (movement > 100) {
      return true;
    }
  }
  return false;
}

/**
 * Local Media Asset Resolution Helper with Safe Fallback
 */

export function resolveImageAsset(path, fallback = '/assets/images/couple-placeholder.svg') {
  if (!path) return fallback;
  return path;
}

export function handleImageError(e, fallback = '/assets/images/couple-placeholder.svg') {
  if (e && e.target && e.target.src !== fallback) {
    e.target.src = fallback;
  }
}

export default resolveImageAsset;

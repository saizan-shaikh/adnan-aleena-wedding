/**
 * Lightweight SEO Utility
 * Dynamically synchronizes metadata based on wedding config.
 */

export function updateMetaTags(metaConfig = {}) {
  if (typeof document === 'undefined') return;

  const { title, description } = metaConfig;

  if (title) {
    document.title = title;
  }

  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
  }
}

export default updateMetaTags;

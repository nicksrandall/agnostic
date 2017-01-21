import { h } from 'preact/src/preact';

export default (callSite = {}, ...substitutions) => {
  let template;
  let css;

  try {
    template = Array.from(callSite.raw);
  } catch (e) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

   css = template.map((chunk, i) => {
    if (callSite.raw.length <= i) {
      return chunk;
    }
    return substitutions[i - 1] ? substitutions[i - 1] + chunk : chunk;
  }).join('');

	return ({children}) => (
		<span>
			<style>{css}</style>
			{children}
		</span>
	);
};

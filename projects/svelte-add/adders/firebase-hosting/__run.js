/** @type {import("../..").AdderRun<import("./__metadata.js").Options>} */
export const run = async ({ applyPreset, options }) => {
	// TODO: built-in implementation
	await applyPreset({
		args: ["--project", options.project],
		preset: "svelte-add/firebase-hosting",
	});
};

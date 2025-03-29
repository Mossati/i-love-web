import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		let post;
		const paths = ['../../posts/', '../../posts_wlw/', '../../posts_experiments/'];

		for (const path of paths) {
			post = await import(`${path}${params.slug}.md`);
			break;
		}

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}

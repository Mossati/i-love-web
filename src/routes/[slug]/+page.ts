import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		let post;

        try {
            post = await import(`../../posts/${params.slug}.md`);
        } catch {
            post = await import(`../../posts_wlw/${params.slug}.md`);
        }

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}

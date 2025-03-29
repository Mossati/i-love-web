import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		let post;
		const paths = ['../../posts/', '../../posts_wlw/', '../../posts_experiments/'];

        // try {
        //     post = await import(`../../posts/${params.slug}.md`);
        // } catch {
        //     post = await import(`../../posts_wlw/${params.slug}.md`);
        // }

		for (const path of paths) {
            try {
                post = await import(`${path}${params.slug}.md`);
                break; // Exit the loop if the file is found
            } catch (e) {
                console.log(e);
            }
        }

		if (!post) {
            throw error(404, `Could not find ${params.slug}`);
        }

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}

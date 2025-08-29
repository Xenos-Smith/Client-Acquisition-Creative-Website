export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');

        // Process the form data as needed
    },
}
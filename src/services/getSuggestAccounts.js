import * as httpRequestRd from '~/utils/httpRequestRd.js';

export const search = async (q, type = 'more') => {
    try {
        const res = await httpRequestRd.get('suggest', {
            params: {
                q,
                type,
            },
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};

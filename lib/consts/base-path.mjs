const isProduction = process.env.NODE_ENV === 'production';

export const basePath = isProduction ? '/public-site' : '';

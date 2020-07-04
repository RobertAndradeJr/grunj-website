export const development = process.env.NODE_ENV === 'development';
export const websiteURL = development ? '/' : process.env.REACT_APP_WEBSITE_URL
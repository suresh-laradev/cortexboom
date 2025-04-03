/**public paths */
export const productsPath = () => "/products";
export const productPath = (id: string) => `/products/${id}`;

/**website paths */
export const websitePath = () => "/";
export const aboutUsPath = () => "/about-us";
export const privacyPolicyPath = () => "/privacy-policy";
export const termsOfServicePath = () => "/terms-of-service";
export const contactUsPath = () => "/contact-us";

/** protected paths */
export const productEditPath = (id: string) => `/products/${id}/edit`;
export const productShowPath = (id: string) => `/products/${id}`;
export const productNewPath = () => "/products/new";
export const productDeletePath = (id: string) => `/products/${id}/delete`;
export const usersPath = () => "/users";
export const userPath = (id: string) => `/users/${id}`;
export const userEditPath = (id: string) => `/users/${id}/edit`;
export const userShowPath = (id: string) => `/users/${id}`;
export const userNewPath = () => "/users/new";

export const ordersPath = () => "/orders";
export const orderPath = (id: string) => `/orders/${id}`;
export const orderEditPath = (id: string) => `/orders/${id}/edit`;
export const orderShowPath = (id: string) => `/orders/${id}`;



export const creditsPath = () => "/credits";
export const analyticsPath = () => "/analytics";

/**auth based paths */
export const dashboardPath = () => "/dashboard";
export const loginPath = () => "/login";
export const signupPath = () => "/signup";
export const forgotPasswordPath = () => "/forgot-password";
export const resetPasswordPath = () => "/reset-password";
export const verifyOTPPath = () => "/verify-otp";
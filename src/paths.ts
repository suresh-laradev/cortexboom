/**public paths */
export const productsPath = () => "/admin/products";
export const productPath = (id: string) => `/admin/products/${id}`;

/**website paths */
export const websitePath = () => "/";
export const aboutUsPath = () => "/about-us";
export const privacyPolicyPath = () => "/privacy-policy";
export const termsOfServicePath = () => "/terms-of-service";
export const contactUsPath = () => "/contact-us";

/** protected paths */
/** client paths */
export const clientDashboardPath = () => "/dashboard";
/** client paths */

/** admin paths */
export const adminDashboardPath = () => "/admin/dashboard";
export const productEditPath = (id: string) => `/admin/products/${id}/edit`;
export const productShowPath = (id: string) => `/admin/products/${id}`;
export const productNewPath = () => "/admin/products/new";
export const productDeletePath = (id: string) => `/admin/products/${id}/delete`;
export const usersPath = () => "/admin/users";
export const userPath = (id: string) => `/admin/users/${id}`;
export const userEditPath = (id: string) => `/admin/users/${id}/edit`;
export const userShowPath = (id: string) => `/admin/users/${id}`;
export const userNewPath = () => "/admin/users/new";

export const ordersPath = () => "/admin/orders";
export const orderPath = (id: string) => `/admin/orders/${id}`;
export const orderEditPath = (id: string) => `/admin/orders/${id}/edit`;
export const orderShowPath = (id: string) => `/admin/orders/${id}`;
/** protected paths */

export const creditsPath = () => "/credits";
export const analyticsPath = () => "/admin/analytics";

/**auth based paths */

export const loginPath = () => "/login";
export const signupPath = () => "/signup";
export const forgotPasswordPath = () => "/forgot-password";
export const resetPasswordPath = () => "/reset-password";
export const verifyOTPPath = () => "/verify-otp";

/** payments */
export const paymentsPath = () => "/payments";
export const checkoutPath = () => "/checkout";
export const paymentSuccessPath = () => "/payment/success";
export const paymentFailedPath = () => "/payment/failed";
/** payments */

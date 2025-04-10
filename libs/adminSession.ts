

interface AdminData {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    role_id: string;
  }
  
  interface AdminMainData {
    pk: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
    role: string;
    role_id: string;
  }
  
  const AUTH_TOKEN_KEY = "authToken";
  const ADMIN_DATA_KEY = "adminData";
  const ADMIN_ID_KEY = "adminId";
  const ADMIN_MAIN_DATA_KEY = "adminMainData";
  const ADMIN_ROLE_KEY = "adminRole";
  
  /**
   * Retrieves the authentication token from session storage.
   * @returns The authentication token or null if not found.
   */
  export const getAuthToken = (): string | null => {
    if (typeof window === 'undefined') {
      return null; // Return null if running on the server
    }
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
  };
  
  /**
   * Retrieves the admin data from session storage.
   * @returns The admin data object or null if not found or invalid.
   */
  export const getAdminData = (): AdminData | null => {
    if (typeof window === 'undefined') {
      return null;
    }
    const data = sessionStorage.getItem(ADMIN_DATA_KEY);
    try {
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error parsing adminData from sessionStorage:", error);
      return null;
    }
  };
  
  /**
   * Retrieves the admin ID from session storage.
   * @returns The admin ID or null if not found.
   */
  export const getAdminId = (): string | null => {
    if (typeof window === 'undefined') {
      return null;
    }
    return sessionStorage.getItem(ADMIN_ID_KEY);
  };
  
  /**
   * Retrieves the main admin data from session storage.
   * @returns The main admin data object or null if not found or invalid.
   */
  export const getAdminMainData = (): AdminMainData | null => {
    if (typeof window === 'undefined') {
      return null;
    }
    const data = sessionStorage.getItem(ADMIN_MAIN_DATA_KEY);
    try {
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error parsing adminMainData from sessionStorage:", error);
      return null;
    }
  };
  
  /**
   * Retrieves the admin role from session storage.
   * @returns The admin role or null if not found.
   */
  export const getAdminRole = (): string | null => {
    if (typeof window === 'undefined') {
      return null;
    }
    return sessionStorage.getItem(ADMIN_ROLE_KEY);
  };
  
  /**
   * Clears all authentication-related data from session storage.
   */
  export const clearAuthData = (): void => {
    if (typeof window === 'undefined') {
      return;
    }
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(ADMIN_DATA_KEY);
    sessionStorage.removeItem(ADMIN_ID_KEY);
    sessionStorage.removeItem(ADMIN_MAIN_DATA_KEY);
    sessionStorage.removeItem(ADMIN_ROLE_KEY);
  };
  
  /**
   * Checks if the user is authenticated (i.e., if an auth token exists).
   * @returns True if the user is authenticated, false otherwise.
   */
  export const isAuthenticated = (): boolean => {
    return typeof window !== 'undefined' ? !!sessionStorage.getItem(AUTH_TOKEN_KEY) : false;
  };
  
  /**
   * Checks if the user has a specific role
   * @param role - the role to check for
   * @returns True if the user has the role, false otherwise
   */
  export const hasRole = (role: string): boolean => {
    return typeof window !== 'undefined' ? sessionStorage.getItem(ADMIN_ROLE_KEY) === role : false;
  }
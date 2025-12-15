import { Navigate } from "react-router-dom";
import { useUserLocation } from "@/hooks";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  /**
   * The component to render when access is allowed
   */
  children: ReactNode;
  /**
   * The path to redirect to when access is denied (default: "/")
   */
  redirectTo?: string;
  /**
   * If true, blocks access for USA users. If false, blocks access for non-USA users.
   * Default: true (blocks USA users)
   */
  blockUSA?: boolean;
  /**
   * Loading component to show while detecting location
   */
  loadingComponent?: ReactNode;
}

/**
 * Pure component that conditionally renders children based on user location
 * Uses IP geolocation to determine if user should have access
 *
 * @example
 * <ProtectedRoute blockUSA={true} redirectTo="/">
 *   <FeaturedWorkPage />
 * </ProtectedRoute>
 */
export const ProtectedRoute = ({
  children,
  redirectTo = "/",
  blockUSA = true,
  loadingComponent = <div className="animate-fade-in">Loading...</div>,
}: ProtectedRouteProps) => {
  const isUSA = useUserLocation();

  // Show loading state while detecting location
  if (isUSA === null) {
    return <>{loadingComponent}</>;
  }

  // Determine if access should be blocked
  const shouldBlock = blockUSA ? isUSA === true : isUSA === false;

  // Redirect if access is blocked
  if (shouldBlock) {
    return <Navigate to={redirectTo} replace />;
  }

  // Render children if access is allowed
  return <>{children}</>;
};

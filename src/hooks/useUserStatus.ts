import { useState, useEffect } from "react";
import {
  getStatusByTime,
  getStatusTooltip,
  type UserStatus,
} from "@/lib/status";

export const useUserStatus = () => {
  const [status, setStatus] = useState<UserStatus>(getStatusByTime());
  const [tooltip, setTooltip] = useState<string>(getStatusTooltip());

  useEffect(() => {
    const updateStatus = () => {
      setStatus(getStatusByTime());
      setTooltip(getStatusTooltip());
    };

    updateStatus();

    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return { status, tooltip };
};

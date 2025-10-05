export type UserStatus = "online" | "away" | "offline";

export interface StatusConfig {
  status: UserStatus;
  color: string;
  darkColor: string;
  animate: boolean;
}

export const getStatusByTime = (): UserStatus => {
  const now = new Date();
  const cairoTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
  );
  const hour = cairoTime.getHours();

  if (hour >= 8 && hour < 20) {
    return "online";
  } else if (hour >= 20 && hour < 23) {
    return "away";
  } else {
    return "offline";
  }
};

export const getStatusConfig = (status: UserStatus): StatusConfig => {
  const configs: Record<UserStatus, StatusConfig> = {
    online: {
      status: "online",
      color: "bg-green-500",
      darkColor: "dark:bg-green-400",
      animate: true,
    },
    away: {
      status: "away",
      color: "bg-orange-500",
      darkColor: "dark:bg-orange-400",
      animate: true,
    },
    offline: {
      status: "offline",
      color: "bg-gray-400",
      darkColor: "dark:bg-gray-500",
      animate: false,
    },
  };

  return configs[status];
};

export interface StatusTransition {
  currentStatus: UserStatus;
  nextStatus: UserStatus;
  hoursUntilChange: number;
}

export const getStatusTransition = (): StatusTransition => {
  const now = new Date();
  const cairoTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
  );
  const hour = cairoTime.getHours();

  let currentStatus: UserStatus;
  let nextStatus: UserStatus;
  let nextChangeHour: number;

  if (hour >= 8 && hour < 20) {
    currentStatus = "online";
    nextStatus = "away";
    nextChangeHour = 20;
  } else if (hour >= 20 && hour < 23) {
    currentStatus = "away";
    nextStatus = "offline";
    nextChangeHour = 23;
  } else {
    currentStatus = "offline";
    nextStatus = "online";
    nextChangeHour = hour < 8 ? 8 : 8 + 24;
  }

  const hoursUntilChange = nextChangeHour - hour;

  return {
    currentStatus,
    nextStatus,
    hoursUntilChange,
  };
};

export const getStatusTooltip = (): string => {
  const { currentStatus, nextStatus, hoursUntilChange } = getStatusTransition();

  const statusLabels: Record<UserStatus, string> = {
    online: "Online",
    away: "Away",
    offline: "Offline",
  };

  const hourText = hoursUntilChange === 1 ? "hour" : "hours";

  return `I'm ${statusLabels[currentStatus]}. Will be ${statusLabels[nextStatus]} in ${hoursUntilChange} ${hourText}.`;
};

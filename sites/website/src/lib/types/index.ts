/**
 * Used to represent a period of time in a day that
 * is available for a meeting (procided it's not booked).
 */
export type AvailabilitySlot = {
  /** Starting hour and minute (in the owner’s timezone) */
  start: { hour: number; minute?: number }
  /** Ending hour and minute (in the owner’s timezone) */
  end: { hour: number; minute?: number }
}

/**
 * A map of day of week (0-6) to availability slots.
 */
export type AvailabilitySlotsMap = {
  /**  */
  [key: number]: AvailabilitySlot[]
}

/**
 * Contains a start Date and end Date in string format that
 * is suitable for serialization from server-side code to
 * client-side.
 */
export type StringInterval = {
  /** Starting time in ISO format */
  start: string
  /** Ending time in ISO format */
  end: string
}

/**
 * Represents an interval of time between start and end.
 */
export type DateTimeInterval = {
  /** Starting date */
  start: Date
  /** Ending date */
  end: Date
}

/**
 * Represents an interval of time between start and end
 * with a timezone.
 */
export type DateTimeIntervalWithTimezone = DateTimeInterval & {
  /** An IANA timezone string */
  timeZone: string
}

/**
 * Represents a meeting request that is sent to the owner.
 */
export type AppointmentProps = {
  /** Starting time string (in ISO format) */
  start: string
  /** Ending time string (in ISO format) */
  end: string
  /** Meeting title */
  summary: string
  /** Email address of the requester. */
  email: string
  /** Location of the meeting. */
  location: string
  /** Timezone of the requester. */
  timeZone: string
  /** A unique ID for generating Google Meet details */
  requestId: string
  /** Name of the requester */
  name: string
  /** Duration of the meeting in minutes  */
  duration: string
  messageText: string
}

export type OwnerData = {
  email: string
  name: string
  replyTo: string
  sender: string
  phone: string
  address: string
  id?: string | undefined
  confirmEmail: string
  bcc: string[]
  userAccount: string
}

export type OfferData = {
  title: string
  url: string
  category: string
}

export type AcceptOfferData = {
  title: string
  url: string
  category: string
  email: string
  name?: string | undefined
  intro?: string | undefined
}

export type OfferRequestData = {
  title: string
  url: string
  category: string
  name: string
  email: string
  phone: string
  coachinglevel?: string
  coachingtypes?: string[]
  coachingproblem?: string
}

export type ScheduleData = {
  name: string
  email: string
  phone: string
  occupation: string
  space: string
  problem: string
  earning: string
}

export type OwnerConfig = {
  email: string
  name: string
  phone: string
  address: string
  bcc: string[]
  reply_to: string
  time_zone: string
  user_account: string
}

export type EmailParams = {
  to: string
  template: string
  context: any
}

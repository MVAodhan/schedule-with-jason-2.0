import { DateTime } from 'luxon';

export const getDates = (date: string, timezone: string) => {
  let usDate;
  let nzDate;
  let dt = DateTime.fromISO(date, { zone: timezone });
  let zonedDt = DateTime.fromObject(
    {
      day: dt.day,
      month: dt.month,
      hour: dt.hour,
      minute: dt.minute,
    },
    { zone: timezone }
  );
  if (zonedDt.zone.name === 'America/Los_Angeles') {
    usDate = zonedDt.toFormat('ff');
  } else {
    usDate = zonedDt.setZone('America/Los_Angeles').toFormat('ff');
  }
  if (zonedDt.zone.name === 'Pacific/Auckland') {
    nzDate = zonedDt.toFormat('ff');
  } else {
    nzDate = zonedDt.setZone('Pacific/Auckland').toFormat('ff');
  }
  if (zonedDt.zone.name === 'utc') {
    usDate = zonedDt.setZone('America/Los_Angeles').toFormat('ff');
    nzDate = zonedDt.setZone('Pacific/Auckland').toFormat('ff');
  }

  return { usDate, nzDate };
};

export const getUTCDate = (date: string, timezone: string) => {
  let utcDate;
  let dt = DateTime.fromISO(date, { zone: timezone });
  let zonedDt = DateTime.fromObject(
    {
      day: dt.day,
      month: dt.month,
      hour: dt.hour,
      minute: dt.minute,
    },
    { zone: timezone }
  );

  utcDate = zonedDt.setZone('utc').toISO();

  return utcDate;
};

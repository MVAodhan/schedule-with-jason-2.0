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
    nzDate = zonedDt.setZone('Pacific/Auckland').toFormat('ff');
  } else {
    usDate = zonedDt.setZone('America/Los_Angeles').toFormat('ff');
    nzDate = zonedDt.toFormat('ff');
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

export const captionDisclaimer = () => {
  return `
  *Captions provided by White Coat Captioning (https://whitecoatcaptioning.com/). 
Communication Access Realtime Translation (CART) is provided in order to facilitate
communication accessibility and may not be a totally verbatim record of the proceedings.*`;
};

export const getCredits = () => {
  return `
  Watch future episodes live at https://twitch.tv/jlengstorf

This episode was sponsored by:
- Netlify (https://lwj.dev/netlify)
- Nx (https://lwj.dev/nx)
- Backlight (https://lwj.dev/backlight)
- Pluralsight (https://lwj.dev/pluralsight)

Live transcription by White Coat Captioning (https://whitecoatcaptioning.com/)


Credits:

Local Elevator by Kevin MacLeod is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)
Source: http://incompetech.com/music/royalty-free/index.html?isrc=USUAN1300012
Artist: http://incompetech.com/

Busybody by Audionautix is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/4.0/)
Artist: http://audionautix.com/

Additional sound effects obtained from https://www.zapsplat.com`;
};

export const getHighlightText = (
  twitter: string = '',
  tech: string = '',
  slug: string = ''
) => {
  return `Did you miss @${twitter} teaching us about ${tech} live on LWJ?
No worries! Watch highlights from the episode here, then check out the full episode replay https://www.learnwithjason.dev/${slug}`;
};

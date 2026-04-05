/**
 * IndexNow Utility
 * Use this to notify search engines (Bing, Yandex, etc.) when you publish new content.
 */

export async function notifySearchEngines(urlList: string[]) {
  const host = 'siora.in'; // Your domain
  const key = process.env.INDEXNOW_KEY || 'your-api-key-here';
  
  const payload = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('IndexNow notification sent successfully.');
      return true;
    } else {
      console.error('IndexNow notification failed:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Error sending IndexNow notification:', error);
    return false;
  }
}

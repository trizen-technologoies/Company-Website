const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNMNMQIS0qQIxOKpz2Ueuq3kYiMsxO70EE41i1QxRmUr1GD-64YDLjDCQWJ0LuhwD0/exec';
export async function submitToSheets(data) {
  console.log('📤 Submitting data:', data);

  try {
    // Build query string — Apps Script GET avoids the 302 redirect issue
    const params = new URLSearchParams(data);
    const url = `${APPS_SCRIPT_URL}?${params.toString()}`;

    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
    });

    const text = await response.text();
    console.log('📨 Raw response:', text);

    const result = JSON.parse(text);
    console.log('✅ Parsed result:', result);

    if (!result.success) throw new Error(result.error || 'Submission failed');
    return result;

  } catch (err) {
    console.error('❌ Error:', err.name, err.message);
    throw err;
  }
}
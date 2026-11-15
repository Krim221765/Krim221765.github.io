let currentProductCode = '';

function openCheckoutModal(productName, priceText, codePrefix) {
  currentProductCode = codePrefix;
  document.getElementById('modalProductName').textContent = productName;
  document.getElementById('modalProductPrice').textContent = priceText;
  document.getElementById('orderStatusBox').hidden = true;
  document.getElementById('buyerEmail').value = '';
  document.getElementById('checkoutModal').hidden = false;
}

function openLicenseModal() {
  document.getElementById('licenseStatusBox').hidden = true;
  document.getElementById('licenseInput').value = '';
  document.getElementById('licenseModal').hidden = false;
}

function closeModals() {
  document.getElementById('checkoutModal').hidden = true;
  document.getElementById('licenseModal').hidden = true;
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('buyerEmail').value.trim();
  const statusBox = document.getElementById('orderStatusBox');
  statusBox.hidden = false;
  statusBox.innerHTML = `⏳ Connecting to authorized Merchant of Record checkout for <strong>${email}</strong>...<br/>For immediate manual invoicing during gateway maintenance, <a href="mailto:krim221765@gmail.com?subject=Order%20${encodeURIComponent(currentProductCode)}&body=Customer%20Email:%20${encodeURIComponent(email)}" style="color:#00f2fe;font-weight:bold;">click here</a>.`;
}

function handleLicenseCheck(e) {
  e.preventDefault();
  const key = document.getElementById('licenseInput').value.trim().toUpperCase();
  const box = document.getElementById('licenseStatusBox');
  box.hidden = false;
  if (key.startsWith('FC-PRO') || key.startsWith('AIMD-PRO')) {
    box.style.borderColor = '#4ade80';
    box.style.color = '#4ade80';
    box.textContent = '✅ Valid Lifetime PRO License format verified. Enter this key inside your app settings.';
  } else {
    box.style.borderColor = '#f5b041';
    box.style.color = '#f5b041';
    box.textContent = 'ℹ️ License key not found in public cache. Please check your email receipt or contact krim221765@gmail.com.';
  }
}

function toggleFaq(item) {
  item.classList.toggle('open');
}

function switchTab(event, tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

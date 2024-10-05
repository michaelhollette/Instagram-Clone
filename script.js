document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById('login-btn');
  
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simulate login by redirecting to the feed page
      window.location.href = 'feed.html';
    });
  
    const profileBtns = document.querySelectorAll('.profile-btn');
    profileBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = 'account.html';
      });
    });
  });
  
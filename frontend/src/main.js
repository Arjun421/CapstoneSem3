const API_URL = 'http://localhost:3001/api/auth';

let isLoginMode = true;

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center px-4 bg-white">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-10">
          
          <!-- Logo/Icon -->
          <div class="flex justify-center mb-8">
            <div class="w-14 h-14 bg-black rounded-full flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
          </div>
          
          <!-- Title -->
          <h2 class="text-3xl font-bold text-center mb-2 text-black">
            ${isLoginMode ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p class="text-center text-gray-500 mb-8 text-sm">
            ${isLoginMode ? 'Enter your credentials to continue' : 'Fill in your details to get started'}
          </p>
          
          <!-- Form -->
          <form id="authForm" class="space-y-5">
            ${!isLoginMode ? `
              <div>
                <label class="block text-sm font-medium text-black mb-2">Full Name</label>
                <input type="text" id="name" 
                  class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                  placeholder="John Doe">
              </div>
            ` : ''}
            
            <div>
              <label class="block text-sm font-medium text-black mb-2">Email</label>
              <input type="email" id="email" required
                class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                placeholder="you@example.com">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-black mb-2">Password</label>
              <input type="password" id="password" required
                class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
                placeholder="••••••••">
            </div>
            
            ${isLoginMode ? `
              <div class="flex items-center justify-between text-sm">
                <label class="flex items-center">
                  <input type="checkbox" class="w-4 h-4 border-2 border-gray-300 rounded">
                  <span class="ml-2 text-gray-600">Remember me</span>
                </label>
                <button type="button" class="text-black hover:underline font-medium">
                  Forgot password?
                </button>
              </div>
            ` : ''}
            
            <!-- Error/Success Messages -->
            <div id="error" class="hidden bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"></div>
            <div id="success" class="hidden bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm"></div>
            
            <!-- Submit Button -->
            <button type="submit" 
              class="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all duration-200 mt-6">
              ${isLoginMode ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <!-- Divider -->
          <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>
          
          <!-- Social Login -->
          <div class="grid grid-cols-2 gap-3">
            <button class="flex items-center justify-center px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button class="flex items-center justify-center px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </button>
          </div>
          
          <!-- Toggle Mode -->
          <div class="mt-6 text-center">
            <p class="text-gray-600 text-sm">
              ${isLoginMode ? "Don't have an account?" : 'Already have an account?'}
              <button id="toggleMode" class="text-black font-semibold hover:underline ml-1">
                ${isLoginMode ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('authForm').addEventListener('submit', handleSubmit);
  document.getElementById('toggleMode').addEventListener('click', toggleMode);
}

async function handleSubmit(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const name = !isLoginMode ? document.getElementById('name').value : undefined;
  
  const errorEl = document.getElementById('error');
  const successEl = document.getElementById('success');
  errorEl.classList.add('hidden');
  successEl.classList.add('hidden');
  
  try {
    const endpoint = isLoginMode ? '/login' : '/signup';
    const response = await fetch(API_URL + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      errorEl.textContent = data.error || 'Something went wrong';
      errorEl.classList.remove('hidden');
      return;
    }
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    // Show success page
    showSuccessPage(data.user);
  } catch (error) {
    errorEl.textContent = 'Network error. Please try again.';
    errorEl.classList.remove('hidden');
  }
}

function toggleMode() {
  isLoginMode = !isLoginMode;
  renderApp();
}

function showSuccessPage(user) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center px-4 bg-white">
      <div class="w-full max-w-md text-center">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-10">
          
          <!-- Success Icon -->
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          <!-- Success Message -->
          <h2 class="text-3xl font-bold text-black mb-3">
            Login Successful!
          </h2>
          <p class="text-gray-600 mb-2">
            Welcome back, <span class="font-semibold text-black">${user.name || 'User'}</span>
          </p>
          <p class="text-sm text-gray-500 mb-8">
            ${user.email}
          </p>
          
          <!-- User Info Card -->
          <div class="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h3 class="text-sm font-semibold text-gray-700 mb-3">Account Details</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">User ID:</span>
                <span class="text-sm font-mono text-black">${user.id.substring(0, 8)}...</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Email:</span>
                <span class="text-sm text-black">${user.email}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Status:</span>
                <span class="text-sm text-green-600 font-semibold">Active</span>
              </div>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="space-y-3">
            <button onclick="location.reload()" 
              class="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all">
              Go to Dashboard
            </button>
            <button id="logoutBtn"
              class="w-full bg-white text-black py-3 rounded-lg font-semibold border-2 border-gray-200 hover:bg-gray-50 transition-all">
              Logout
            </button>
          </div>
        </div>
        
        <!-- Footer -->
        <p class="text-gray-400 text-xs mt-6">
          You are now securely logged in
        </p>
      </div>
    </div>
  `;
  
  // Add event listener for logout button
  document.getElementById('logoutBtn').addEventListener('click', logout);
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.reload();
}

// Check if user is already logged in
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

if (token && user) {
  showSuccessPage(JSON.parse(user));
} else {
  renderApp();
}

const root = document.getElementById('root');

window.onload = () => {
  routing(window.location.pathname);
};

function routing(endpoint) {
  const ROUTE_HOME = '/';
  const ROUTE_DAILY = '/dailylog';

  let renderElement = null;
  switch (endpoint.toLowerCase()) {
    case ROUTE_HOME:
      break;
    case ROUTE_DAILY:
      renderElement = renderDailyLogPage();
      break;
  }

  root.innerHTML = '';
  if (renderElement) {
    root.appendChild(renderElement);
  }
}

function renderDailyLogPage() {
  const dailyLogPage = new DailyLogPage();

  const wrapper = document.createElement('div');
  wrapper.appendChild(dailyLogPage.render());

  return wrapper;
}

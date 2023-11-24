function showTab(tabName, buttonId) {
    var tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(function(tabContent) {
        tabContent.style.display = "none";
    });

    var tabButtons = document.querySelectorAll("#left-panel .tab-button");
    tabButtons.forEach(function(tabButton) {
        tabButton.classList.remove("active");
    });

    var selectedTabContent = document.getElementById(tabName);
    selectedTabContent.style.display = "block";

    var selectedTabButton = document.querySelector(`#left-panel button.tab-button[onclick="showTab('${tabName}', '${buttonId}')"]`);
    selectedTabButton.classList.add("active");

    var tabIndicator = document.getElementById("tab-indicator");
    var leftPosition = selectedTabButton.offsetLeft;
    var topPosition = selectedTabButton.offsetTop;
    tabIndicator.style.top = topPosition + "px";
    tabIndicator.style.display = "block";
}

function showTab(tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    var selectedTab = document.getElementById(tabName);
    selectedTab.style.display = "block";

    var selectedTabButton = document.querySelector(`button.tab-button[onclick="showTab('${tabName}')"]`);
    selectedTabButton.classList.add("active");

    var tabIndicator = document.getElementById("tab-indicator");
    var leftPosition = selectedTabButton.offsetLeft;
    var topPosition = selectedTabButton.offsetTop;
    tabIndicator.style.top = topPosition + "px";
    tabIndicator.style.display = "block";
}

function showTab(tabName) {
    var tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(function(tabContent) {
        tabContent.style.display = "none";
    });

    var tabButtons = document.querySelectorAll("#left-panel .tab-button");
    tabButtons.forEach(function(tabButton) {
        tabButton.classList.remove("active");
    });

    var selectedTabContent = document.getElementById(tabName);
    selectedTabContent.style.display = "block";

    var selectedTabButton = document.querySelector(`#left-panel button.tab-button[onclick="showTab('${tabName}')"]`);
    selectedTabButton.classList.add("active");

    var tabIndicator = document.getElementById("tab-indicator");
    var leftPosition = selectedTabButton.offsetLeft;
    var topPosition = selectedTabButton.offsetTop;
    tabIndicator.style.top = topPosition + "px";
    tabIndicator.style.display = "block";
}





function showSystemButtons() {
    var systemButtonsContainer = document.getElementById("systemButtonsContainer");
    systemButtonsContainer.style.display = "flex";
}

function showResourcesButtons() {
    var resourcesButtonsContainer = document.getElementById("resourcesButtonsContainer");
    resourcesButtonsContainer.style.display = "flex";
}

function showManageButtons() {
    var manageButtonsContainer = document.getElementById("manageButtonsContainer");
    manageButtonsContainer.style.display = "flex";
}




document.addEventListener('DOMContentLoaded', function() {
    const themeToggleInput = document.getElementById('theme-toggle-input');
    const themeLabels = document.querySelectorAll('.theme-label');
    const body = document.body;

    function toggleTheme() {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
        } else {
            body.classList.add('dark');
        }
    }

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        body.classList.add(storedTheme);
        if (storedTheme === 'dark') {
            themeToggleInput.checked = true;
            themeLabels[0].style.color = '#A5A5A5';
            themeLabels[1].style.color = '#000000';
        }
    }

    themeToggleInput.addEventListener('change', function() {
        toggleTheme();
        if (body.classList.contains('dark')) {
            themeLabels[0].style.color = '#A5A5A5';
            themeLabels[1].style.color = '#000000';
        } else {
            themeLabels[0].style.color = '#000000';
            themeLabels[1].style.color = '#A5A5A5';
        }
    });

    document.getElementById('ManagementButton').addEventListener('click', function() {
        showTab('Management', 'ManagementButton');
    });
    document.getElementById('ManageButton').addEventListener('click', function() {
        showManageButtons();
        showTab('Manage', 'ManageButton');
    });
    document.getElementById('DashboardsButton').addEventListener('click', function() {
        showTab('Dashboards', 'DashboardsButton');
    });
    document.getElementById('EnvironmentsButton').addEventListener('click', function() {
        showTab('Environments', 'EnvironmentsButton');
    });
    document.getElementById('DataSetsButton').addEventListener('click', function() {
        showTab('DataSets', 'DataSetsButton');
    });
    document.getElementById('PoliciesButton').addEventListener('click', function() {
        showTab('Policies', 'PoliciesButton');
    });
    document.getElementById('UsersButton').addEventListener('click', function() {
        showTab('Users', 'UsersButton');
    });
    document.getElementById('VDBConfigButton').addEventListener('click', function() {
        showTab('VDB_Config_Templates', 'VDBConfigButton');
    });
    document.getElementById('HookTemplatesButton').addEventListener('click', function() {
        showTab('HookTemplates', 'HookTemplatesButton');
    });
    document.getElementById('PluginsButton').addEventListener('click', function() {
        showTab('Plugins', 'PluginsButton');
    });
    document.getElementById('ResourcesButton').addEventListener('click', function() {
        showResourcesButtons();
        showTab('Resources', 'ResourcesButton');
    });

    document.getElementById('PerformanceAnalyticsButton').addEventListener('click', function() {
        showTab('PerformanceAnalytics', 'PerformanceAnalyticsButton');
    });
    document.getElementById('DatasetPerformanceButton').addEventListener('click', function() {
        showTab('DatasetPerformance', 'DatasetPerformanceButton');
    });
    document.getElementById('StorageCapacityButton').addEventListener('click', function() {
        showTab('StorageCapacity', 'StorageCapacityButton');
    });
    document.getElementById('SystemButton').addEventListener('click', function() {
        showSystemButtons();
        showTab('System', 'SystemButton');
    });
    document.getElementById('ReplicationButton').addEventListener('click', function() {
        showTab('Replication', 'ReplicationButton');
    });
    document.getElementById('FaultsButton').addEventListener('click', function() {
        showTab('Faults', 'FaultsButton');
    });
    document.getElementById('JobsButton').addEventListener('click', function() {
        showTab('Jobs', 'JobsButton');
    });
    document.getElementById('EventsButton').addEventListener('click', function() {
        showTab('Events', 'EventsButton');
    });
    document.getElementById('AuditButton').addEventListener('click', function() {
        showTab('Audit', 'AuditButton');
    });
});
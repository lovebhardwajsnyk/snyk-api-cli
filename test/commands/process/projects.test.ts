import {
  run,
  expectOrgNotFound,
  expectEndpointErr,
  expectOrgIdErr,
  expectProjectIdErr,
  expectIssueIdErr,
  expectFilePathErr,
} from '../../utils';
import { PROJECTS_API_ENDPOINTS } from '../../../src/enums/enums';

describe('PROCESS: Test projects API related commands', () => {
  describe('Invalid endpoint test', () => {
    it('Should print error for endpoint not valid', () => {
      const res = run(`process -a=projects -e=something-invalid`);
      expectEndpointErr(res);
    });
  });

  describe('List all projects', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_PROJECTS}`);
      expectOrgIdErr(res);
    });

    it('Should return the results from the API', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_PROJECTS} --org-id=test`);
      expectOrgNotFound(res);
    });
  });

  describe('Retrieve a single project', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.RETRIEVE_SINGLE_PROJECT}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.RETRIEVE_SINGLE_PROJECT} -o=test`);
      expectProjectIdErr(res);
    });
    it('Should return the response from the API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.RETRIEVE_SINGLE_PROJECT} -o=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Update a project', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT} --org-id=test --project-id=test`,
      );
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT} --org-id=test --project-id=test --file=./test/json/projects/updateProject.json`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Delete a project', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_PROJECT}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_PROJECT} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_PROJECT} --org-id=test`);
    });
  });

  describe('Deactivate project', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DEACTIVATE_PROJECT}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DEACTIVATE_PROJECT} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.DEACTIVATE_PROJECT} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Activate project', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ACTIVATE_PROJECT}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ACTIVATE_PROJECT} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.ACTIVATE_PROJECT} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('List aggregate issues', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_AGGREGATE_ISSUES}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_AGGREGATE_ISSUES} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_AGGREGATE_ISSUES} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Get project dep graph', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.GET_PROJECT_DEP_GRAPH}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_AGGREGATE_ISSUES} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_AGGREGATE_ISSUES} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('List all ignores', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_IGNORES}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_IGNORES} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_IGNORES} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Retrieve ignore', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.RETRIEVE_IGNORE}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.RETRIEVE_IGNORE} -o=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for issue ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.RETRIEVE_IGNORE} -o=test --project-id=test`);
      expectIssueIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.RETRIEVE_IGNORE} -o=test --project-id=test --issue-id=test`,
      );
      expectOrgNotFound(res);
    });
  });
  describe('Add ignore', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_IGNORE}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_IGNORE} -o=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for issue ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_IGNORE} -o=test --project-id=test`);
      expectIssueIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_IGNORE} -o=test --project-id=test --issue-id=test`,
      );
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_IGNORE} -o=test --project-id=test --issue-id=test --file=test/json/projects/addIgnore.json`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Replace ignores', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.REPLACE_IGNORES}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.REPLACE_IGNORES} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for issue ID not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.REPLACE_IGNORES} --org-id=test --project-id=test`,
      );
      expectIssueIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.REPLACE_IGNORES} --org-id=test --project-id=test --issue-id=test`,
      );
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.REPLACE_IGNORES} --org-id=test --project-id=test --issue-id=test --file=test/json/projects/replaceIgnores.json`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Delete ignores', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_IGNORES}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_IGNORES} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for issue ID not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_IGNORES} --org-id=test --project-id=test`,
      );
      expectIssueIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_IGNORES} --org-id=test --project-id=test --issue-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('List all Jira issues', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_JIRA_ISSUES}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_JIRA_ISSUES} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_ALL_JIRA_ISSUES} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Create Jira issue', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.CREATE_JIRA_ISSUE}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.CREATE_JIRA_ISSUE} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for issue ID not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.CREATE_JIRA_ISSUE} --org-id=test --project-id=test`,
      );
      expectIssueIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.CREATE_JIRA_ISSUE} --org-id=test --project-id=test --issue-id=test`,
      );
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.CREATE_JIRA_ISSUE} --org-id=test --project-id=test --issue-id=test --file=test/json/projects/createJir.json`,
      );
    });
  });

  describe('List project settings', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_PROJECT_SETTINGS}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_PROJECT_SETTINGS} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.LIST_PROJECT_SETTINGS} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Update project settings', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT_SETTINGS}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT_SETTINGS} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT_SETTINGS} --org-id=test --project-id=test`,
      );
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.UPDATE_PROJECT_SETTINGS} --org-id=test --project-id=test --file=./test/json/projects/updateProjectSettings.json`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Delete project settings', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_PROJECT_SETTINGS}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_PROJECT_SETTINGS} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.DELETE_PROJECT_SETTINGS} --org-id=test --project-id=test`,
      );
      expectOrgNotFound(res);
    });
  });

  describe('Move project', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.MOVE_PROJECT}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.MOVE_PROJECT} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.MOVE_PROJECT} --org-id=test --project-id=test`);
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.MOVE_PROJECT} --org-id=test --project-id=test --file=./test/json/projects/moveProject.json`,
      );
      expectOrgNotFound(res);
    });
  });
  describe('Add tag', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_TAG}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_TAG} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_TAG} --org-id=test --project-id=test`);
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.ADD_TAG} --org-id=test --project-id=test --file=./test/json/projects/addTag.json`,
      );
      expectOrgNotFound(res);
    });
  });
  describe('Remove project tag', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.REMOVE_PROJECT_TAG}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.REMOVE_PROJECT_TAG} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.REMOVE_PROJECT_TAG} --org-id=test --project-id=test`,
      );
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.REMOVE_PROJECT_TAG} --org-id=test --project-id=test --file=./test/json/projects/removeTag.json`,
      );
      expectOrgNotFound(res);
    });
  });
  describe('Apply attributes', () => {
    it('Should print error for org ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.APPLY_ATTRIBUTES}`);
      expectOrgIdErr(res);
    });
    it('Should print error for project ID not provided', () => {
      const res = run(`process -a=projects -e=${PROJECTS_API_ENDPOINTS.APPLY_ATTRIBUTES} --org-id=test`);
      expectProjectIdErr(res);
    });
    it('Should print error for file path not provided', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.APPLY_ATTRIBUTES} --org-id=test --project-id=test`,
      );
      expectFilePathErr(res);
    });

    it('Should return the result from API', () => {
      const res = run(
        `process -a=projects -e=${PROJECTS_API_ENDPOINTS.APPLY_ATTRIBUTES} --org-id=test --project-id=test --file=./test/json/projects/applyAttributes.json`,
      );
      expectOrgNotFound(res);
    });
  });
});

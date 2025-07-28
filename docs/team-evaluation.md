# Team Evaluation

This section provides an in-depth look at the, project workflow, and the comprehensive evaluation system within Projexa LMS.

## Idea Submission and Project Workflow

Teams engage in a structured project lifecycle, beginning with the formal submission of their problem statements or project ideas.

### Project Status Tracking

The system tracks the status of each team's project throughout its lifecycle, providing clear visibility into its progress.

<!-- ![Project Status Display (Team Dashboard)](assets/images/project_status_display.png) -->

## Comprehensive Evaluation Process

Projexa employs a robust evaluation system to assess both individual student performance and overall team contributions. This system is highly configurable and transparent.

### Evaluation Criteria and Scoring

The final marks for each student are calculated as the sum of their weighted scores from Evaluations, Interactions, and Achievements. These components are weighted according to the evaluation criteria defined for each session and student year.

#### 1. Evaluations (Formal Assessments)

This component reflects performance in formal assessments, such as project presentations, viva-voce, or written exams. Scores are typically assigned by evaluators based on predefined rubrics.

#### 2. Interactions (Mentor Engagement)

This component measures a student's engagement and performance during mentor interactions. It considers attendance and the ratings provided by mentors for each interaction.

#### 3. Achievements (Additional Contributions)

This component accounts for any additional achievements or contributions made by the student beyond the scope of formal evaluations and interactions. This could include external competition wins, publications, or significant contributions to open-source projects.

## Evaluation File Management

Projexa provides a system for managing files submitted as part of the evaluation process, ensuring proper documentation and review.

### Submitting Evaluation Documents

Teams can upload various documents (e.g., project reports, presentations, code) that are required for their evaluations.

<!-- ![Document Upload Interface (Student View)](assets/images/document_upload_interface.png) -->

### Approving and Rejecting Evaluation Files

Coordinators have the ability to review submitted evaluation files and either approve or reject them. This ensures that only valid and complete submissions are considered for evaluation.

<!-- ![Evaluation File Review (Coordinator View)](assets/images/coordinator_file_review.png)
*To get this screenshot: As a coordinator, navigate to the evaluation assignments or document review page (e.g., `/coordinator/dashboard` or a specific evaluation detail page). Capture the interface showing submitted files, with options to approve, reject, and provide reasons for rejection.* -->

## Role-Based Access to Evaluation Features

Access to evaluation-related functionalities is controlled by user roles:

*   **Students:** Can submit problem statements, view their project status, and upload evaluation documents for their team. Team leaders have additional permissions to manage these submissions.
*   **Mentors:** May view team progress and provide feedback, which contributes to the interaction score.
*   **Coordinators:** Have comprehensive access to manage problem statements, evaluation assignments, approve/reject evaluation files, and view detailed student and team evaluation scores.
*   **Admins:** Possess full control over all evaluation settings, including defining evaluation criteria weights and managing all aspects of the evaluation process across sessions.

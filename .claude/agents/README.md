# TheTruePrompt Landing Page - Claude Code Agents

This directory contains specialized agents for optimizing and maintaining the TheTruePrompt landing page project.

## Available Agents

### 1. 🎯 Landing Page Optimizer (`landing-page-optimizer`)
**Purpose**: Conversion rate optimization and user experience enhancement
**Use Cases**:
- A/B testing different headlines and CTAs
- Optimizing form conversion rates
- Improving mobile user experience
- Enhancing trust signals and social proof
- Analyzing user flow and drop-off points

**Invoke with**: `/agents landing-page-optimizer`

### 2. 🔍 Code Reviewer (`code-reviewer`)
**Purpose**: Code quality, security, and maintainability review
**Use Cases**:
- Reviewing recent code changes
- Ensuring HTML/CSS/JavaScript best practices
- Security vulnerability assessment
- Performance optimization review
- Accessibility compliance checking

**Invoke with**: `/agents code-reviewer`

### 3. ⚡ Performance Monitor (`performance-monitor`)
**Purpose**: Performance optimization and Core Web Vitals monitoring
**Use Cases**:
- Monitoring page load speeds
- Analyzing animation performance
- Optimizing mobile experience
- Tracking Core Web Vitals
- Resource optimization analysis

**Invoke with**: `/agents performance-monitor`

## How to Use These Agents

### Method 1: Direct Invocation
```bash
# In Claude Code, invoke a specific agent
/agents landing-page-optimizer

# Or use the agent name directly
landing-page-optimizer: analyze conversion bottlenecks
```

### Method 2: Context-Aware Activation
The agents will automatically activate when you mention relevant tasks:
- "optimize conversion rate" → Landing Page Optimizer
- "review code quality" → Code Reviewer  
- "check performance" → Performance Monitor

### Method 3: Project-Specific Tasks
```bash
# Optimize the landing page for conversions
landing-page-optimizer: improve CTA button placement and copy

# Review recent changes for quality
code-reviewer: review the latest form validation changes

# Monitor page performance
performance-monitor: analyze Core Web Vitals and suggest improvements
```

## Agent Capabilities

### Landing Page Optimizer
- **Tools**: Read, Write, Search, Web Search
- **Focus**: Conversion optimization, UX enhancement, A/B testing
- **Output**: Actionable recommendations with implementation guidance

### Code Reviewer
- **Tools**: Read, Grep, Bash
- **Focus**: Code quality, security, maintainability
- **Output**: Prioritized feedback (Critical → Warnings → Suggestions)

### Performance Monitor
- **Tools**: Read, Bash, Web Search
- **Focus**: Speed optimization, Core Web Vitals, mobile performance
- **Output**: Performance metrics with optimization strategies

## Best Practices

1. **Start with the Landing Page Optimizer** for conversion-focused improvements
2. **Use Code Reviewer** before deploying changes to ensure quality
3. **Run Performance Monitor** regularly to maintain optimal speeds
4. **Combine agents** for comprehensive analysis (e.g., optimize then review)

## Example Workflows

### Conversion Optimization Workflow
```bash
1. landing-page-optimizer: analyze current conversion funnel
2. code-reviewer: review any code changes made
3. performance-monitor: ensure optimizations don't impact speed
```

### Performance Improvement Workflow
```bash
1. performance-monitor: identify performance bottlenecks
2. code-reviewer: review optimization code quality
3. landing-page-optimizer: ensure performance improvements maintain conversions
```

### Code Quality Workflow
```bash
1. code-reviewer: review recent changes
2. performance-monitor: check for performance regressions
3. landing-page-optimizer: validate user experience impact
```

## Agent Configuration

Each agent is configured with:
- **Specific tools** relevant to their function
- **Project context** understanding
- **Clear responsibilities** and output formats
- **Success criteria** and metrics

## Customization

To modify an agent:
1. Edit the corresponding `.md` file in this directory
2. Update the agent's description, tools, or behavior
3. Save the changes - they'll be active immediately

## Monitoring and Metrics

### Landing Page Optimizer Metrics
- Conversion rate improvements
- Form completion rates
- User engagement metrics
- A/B test results

### Code Reviewer Metrics
- Code quality scores
- Security vulnerability counts
- Performance impact assessments
- Accessibility compliance ratings

### Performance Monitor Metrics
- Core Web Vitals scores
- Page load times
- Animation performance
- Mobile experience ratings

Remember: These agents work together to maintain a high-quality, high-converting landing page while ensuring optimal performance and user experience.

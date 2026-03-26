# claude-code-guide

A skill that teaches you Claude Code while you use it. Ask what you want to do in plain english, get the exact command.

Claude Code is crazy powerful but most people only use 10% of it because the surface area is huge and the docs are dense. This skill gives your agent the full reference so it actually guides you correctly instead of hallucinating commands that don't exist.

## Install

```bash
npx skills add jcdentonintheflesh/claude-code-guide
```

That's it. Now you have `/guide`.

## Usage

```
/guide                              show me the basics
/guide how do I search my codebase  get the exact command
/guide what are worktrees           learn a feature
/guide plan mode                    understand a workflow
/guide keyboard shortcuts           see all shortcuts
/guide undo                         fix a mistake
```

It also kicks in automatically when you ask "how do I..." questions about Claude Code.

## What it covers

- Every slash command, keyboard shortcut, and CLI flag
- Git workflows (commits, PRs, branches)
- Plan mode, worktrees, background tasks
- Context management and performance
- Config files, env vars, permissions
- MCP servers, hooks, voice mode, scheduled tasks
- Troubleshooting common problems

## Works with

This follows the [Agent Skills](https://agentskills.io) standard so it works across Claude Code, Cursor, Copilot, Gemini CLI, and other compatible tools.

## License

MIT

# Claude Code Guide

A Claude Code skill that acts as an interactive guide for beginners. Instead of reading docs or memorizing commands, just ask what you want to do in plain English.

## What it does

When you or Claude don't know the right command, shortcut, or workflow — this skill translates intent into action. It covers:

- **Commands & shortcuts** — every slash command, keyboard shortcut, and CLI flag
- **Workflows** — plan mode, worktrees, background tasks, parallel editing
- **Configuration** — settings files, environment variables, permissions
- **Git & GitHub** — commits, PRs, branches, code review
- **Troubleshooting** — common problems and how to fix them
- **Advanced features** — MCP servers, hooks, voice mode, scheduled tasks

## Install

Copy the skill to your personal Claude Code skills directory:

```bash
# Personal (available in all projects)
mkdir -p ~/.claude/skills/guide
cp SKILL.md ~/.claude/skills/guide/SKILL.md

# Or project-level (available only in this project)
mkdir -p .claude/skills/guide
cp SKILL.md .claude/skills/guide/SKILL.md
```

## Usage

```
/guide                              — Show quick-start overview
/guide how do I search my codebase  — Get the exact command
/guide what are worktrees           — Learn a feature
/guide plan mode                    — Understand a workflow
/guide keyboard shortcuts           — See all shortcuts
```

Claude will also invoke this skill automatically when it detects you're asking "how do I..." style questions about Claude Code itself.

## Examples

```
/guide how do I undo a change
→ Press Esc Esc to undo the last change, or use /rewind to step back further.

/guide how do I make Claude work faster
→ /fast on for faster output, /effort low for simpler tasks.

/guide how do I give Claude context about my project
→ Create a CLAUDE.md file in your project root with instructions.
```

## Why this exists

Claude Code is powerful but the surface area is huge. New users don't know what's possible, and Claude sometimes gives incorrect or incomplete instructions about its own features without proper context. This skill gives Claude the full reference so it can guide you accurately.

## License

MIT

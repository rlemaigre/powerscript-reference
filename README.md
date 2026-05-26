# PowerScript Reference Skill

An agent skill that exposes authoritative knowledge about PowerScript, the programming language of Sybase/SAP/Appeon PowerBuilder applications.

## Installation

To add this skill to your workspace, run:

```bash
npx skills add rlemaigre/powerscript-reference
```

## Structure

This repository contains the core `powerscript-reference` skill along with its supporting reference manuals, ANTLR4 grammars, and local semantic search (RAG) capabilities:

```
├── skills/
│   └── powerscript-reference/
│       ├── SKILL.md              # Core skill definition loaded by the agent
│       ├── references/           # In-depth language reference documents
│       │   ├── declarations_and_datatypes.md
│       │   ├── operators_and_expressions.md
│       │   ├── objects_and_structures.md
│       │   ├── functions_and_events.md
│       │   ├── embedded_and_dynamic_sql.md
│       │   ├── language_summary.md
│       │   ├── PowerBuilder_2019_powerscript_reference_2019.pdf
│       │   └── grammars/         # ANTLR4 grammars for PowerBuilder parser/lexer
│       └── scripts/
│           └── rag/              # Local semantic search index (RAG)
│               ├── query.js      # CLI script to query the RAG database
│               ├── embeddings.sqlite
│               └── toc.yaml
```

## Usage

### Local Semantic Search (RAG Query)

The skill features a local semantic search engine that queries the full chunked PowerScript 2019 reference manual.

To query the database manually, run the query utility:

```bash
node skills/powerscript-reference/scripts/rag/query.js \
  --embeddings skills/powerscript-reference/scripts/rag/embeddings.sqlite \
  --question "How do I declare an autoinstantiated user object?" \
  --top 5 \
  --markdown
```

#### CLI Parameters:
* `--embeddings <path>`: Path to the SQLite embeddings file.
* `--question "<question>"`: The question to query.
* `--top <number>` (Optional): Number of matched chunks to return (default is `5`).
* `--markdown` (Optional): Renders the matching documentation chunks directly as markdown. Omit this flag to output JSON results.

---

## License

MIT

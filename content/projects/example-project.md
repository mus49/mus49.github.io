+++
title = "Custom Parser Implementation"
date = 2025-12-30
description = "A recursive descent parser for a simple functional language"
+++

Building a parser from scratch provides deep insights into how programming languages work. This project implements a recursive descent parser for a small functional language.

## Language Features

The language supports:
- Lambda expressions: `λx. x + 1`
- Let bindings: `let x = 5 in x * 2`
- Arithmetic operations
- Function application

## Tokenization

First, we convert the input string into tokens:

```python
def tokenize(input_str):
    tokens = []
    current = ""
    for char in input_str:
        if char in " \t\n":
            if current:
                tokens.append(current)
                current = ""
        elif char in "()":
            if current:
                tokens.append(current)
            tokens.append(char)
            current = ""
        else:
            current += char
    return tokens
```

## Parsing

The parser builds an abstract syntax tree (AST):

```python
def parse_expr(tokens):
    if tokens[0] == 'λ':
        param = tokens[1]
        body = parse_expr(tokens[3:])
        return Lambda(param, body)
    elif tokens[0] == 'let':
        var = tokens[1]
        value = parse_expr(tokens[3:])
        return Let(var, value)
    # ... more cases
```

## Evaluation

Once parsed, expressions can be evaluated in an environment:

```python
def eval_expr(expr, env):
    if isinstance(expr, Lambda):
        return Closure(expr.param, expr.body, env)
    elif isinstance(expr, Application):
        func = eval_expr(expr.func, env)
        arg = eval_expr(expr.arg, env)
        return apply(func, arg)
    # ... more cases
```

## Results

The parser successfully handles nested expressions and properly implements lexical scoping. Future work includes adding type checking and optimization passes.

**GitHub**: [github.com/mus49/parser](https://github.com/mus49)

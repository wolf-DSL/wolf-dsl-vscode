#!/usr/bin/env sh

# Try to find Java in common locations
if [ -z "$JAVA_HOME" ]; then
    if [ -x "/usr/libexec/java_home" ]; then
        export JAVA_HOME=$(/usr/libexec/java_home -v 11 2>/dev/null || /usr/libexec/java_home 2>/dev/null)
    fi
fi

# Check if java is available
if ! command -v java &> /dev/null; then
    echo "Error: Java not found. Please install Java 11 or later." >&2
    exit 1
fi

java -jar $1
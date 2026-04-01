type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

function serializeSchema(data: JsonLdValue) {
    // Ersätter tecken som annars kan bryta script-taggen i HTML.
    return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function SchemaMarkup({ data }: { data: JsonLdValue }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeSchema(data) }}
        />
    );
}

export type USER = {
    _id: string
    surname: string
    other_names: string
    email: string
    role: "admin" | "user"
    must_change_password: boolean
    created_at: Date
    updated_at: Date
}

export type DOCS_TYPE = {
    _id: string,
    title: string,
    description: string,
    name: string,
    size: number,
    downloaded_count: number,
    emailed_count: number,
    user_id: string,
    location: string,
    created_at: string,
    updated_at: string,
    mime_type: string
};

# Do not call this function explicitly

Do not code calls to this function. The GetURL and PostURL functions include an argument that references an instantiated InternetResult descendant. When these



functions complete, the Context object calls the InternetData function, returning HTML in data.

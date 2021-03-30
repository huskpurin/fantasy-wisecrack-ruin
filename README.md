# Milestorn #1
- extra the async calls+UI logic 
  - extra 
    - hook api
  - async
    - api
      - loading/loaded status

# Milestorn #2
- extra the UI of async call status logic
  - extra
    - suspen
  - UI
    - loading model
      - isOpen: !loaded

# Milestorn #3
- support multiple types of async calls and UIs
  - types of async calls
    - api
      - loading
      - loaded
      - response
        - status code
          - 200
          - 400/500
            - retry
            - error msg
  - UI
    - loading model
    - loading bar
    - error msg
    - toast
    - redirect to specific page
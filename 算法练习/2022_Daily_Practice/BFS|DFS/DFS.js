let obj = {
    children: [
        {
            index: 0,
            children: [
                {
                    index: 1,
                    children: [
                        {
                            index: 3,
                        },
                    ],
                },
            ],
        },
        {
            index: 4,
        },
        {
            index: 5,
            children: [
                {
                    index: 7,
                    children: [
                        {
                            index: 8,
                        },
                    ],
                },
            ],
        },
        {
            index: 6,
        },
    ],
};

/**
      -1
0   4   5   6
|       |
1       7
|       |
3       8

 */
function BFS(tree) {
    if (!tree) {
        return []
    }
    const stack = [], res = []
    stack.push(tree)
    while (stack.length) {
        const cur = stack.shift()
        res.push(cur)
        const children = cur.children || []
        for (let i = 0; i < children.length; i++) {
            stack.push(children[i])
        }
    }
    return res
}

function DFS(tree) {
    if (!tree) {
        return []
    }
    const stack = [], res = []
    stack.push(tree)
    while(stack.length) {
        const cur = stack.pop()
        res.push(cur)
        const children = cur.children || []
        for(let i = children.length -1; i >=0 ; i--) {
            stack.push(children[i])
        }
    }
    return res
}

console.log(BFS(obj), DFS(obj));
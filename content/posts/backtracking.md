---
author: "Jihan"
title: "回溯"
date: "2023-05-21"
draft: true
tags:
- algorithm
---

对回溯的理解，以leetcode46模版体为例
<!--more-->


```go
func permute(nums []int) (ans [][]int) {
    path := make([]int, len(nums))
    record := make([]bool, len(nums))
    var dfs func(i int)
    dfs = func (i int) {
        if (i == len(nums)) {
            ans = append(ans, append([]int(nil), path...))
            return
        }
        for index, recorded := range record {
            if !recorded {
                path[i] = nums[index]
                record[index] = true
                dfs(i+1)
                record[index] = false
            }
        }
    }
    dfs(0)
    return
}
```
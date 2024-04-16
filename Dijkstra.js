const graph = {
    "A": {"B":3, "C":5},
    "B": {"A":3, "D":2, "E":6},
    "C": {"A":5, "F":8},
    "D": {"B":2, "F":4, "E":7},
    "E": {"B":6, "D":7, "G":1},
    "F": {"C":8, "D":4, "G":3},
    "G": {"E":1, "F":3}
}

 const dijkstra = (graph, start) => {
    let distances = {}

    for ( let vertex in graph ){
        distances[vertex]= Infinity
    }
    distances[start] = 0

 }
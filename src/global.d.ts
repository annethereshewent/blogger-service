// this is a really bad hack due to some bug with @tsed not detecting the ReadableStream class properly.
// this will fix the issue for now
import ReadableStream = NodeJS.ReadableStream
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import Prompt
import json
import redis
from django.views.decorators.csrf import csrf_exempt

r = redis.Redis(host="localhost", port=6379, decode_responses=True)


@csrf_exempt
def prompt_list(request):

    if request.method == "GET":
        prompts = list(Prompt.objects.all().values())
        return JsonResponse(prompts, safe=False)

    if request.method == "POST":
        body = json.loads(request.body)

        prompt = Prompt.objects.create(
            title=body['title'],
            content=body['content'],
            complexity=body['complexity']
        )

        return JsonResponse({"message": "Created", "id": prompt.id})


def prompt_detail(request, id):
    prompt = get_object_or_404(Prompt, id=id)

    key = f"prompt:{id}:views"
    views = r.incr(key)

    return JsonResponse({
        "id": prompt.id,
        "title": prompt.title,
        "content": prompt.content,
        "complexity": prompt.complexity,
        "created_at": prompt.created_at,
        "view_count": views
    })
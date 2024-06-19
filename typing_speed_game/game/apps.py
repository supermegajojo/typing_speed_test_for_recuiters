from django.apps import AppConfig


class GameConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "game"

class YourAppConfig(AppConfig):
    name = 'yourapp'  # Replace 'yourapp' with the name of your app

    def ready(self):
        import game.signals  # Ensure 'yourapp' is the name of your app
